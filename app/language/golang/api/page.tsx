import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Page() {
  return (
    <div>
      <APItemplate />
      <br />
    </div>
  );
}

function APItemplate() {
  return (
    <div>
      <h1>API</h1>
      <p>
        This template creates an API to <code>GET</code> and <code>POST</code>{" "}
        messages in memory:
      </p>
      <SyntaxHighlighter language="go" style={dracula}>{`package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strings"
	"sync"
	"sync/atomic"
)

// Message represents a single stored message with an ID and content.
type Message struct {
	ID   int    \`json:"id"\`
	Text string \`json:"text"\`
}

// newMessageAPI constructs and returns an http.Handler that manages in-memory messages
// and injects an incrementing X-Request-ID header on every request.
func newMessageAPI() http.Handler {
	// In-memory message store and synchronization primitives
	messages := []Message{}
	var messagesMu sync.Mutex
	var requestCount uint64

	// Core application handler for processing /messages endpoints
	handler := http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// All responses from this API must return application/json
		w.Header().Set("Content-Type", "application/json")

		switch r.Method {
		case http.MethodGet:
			// Lock while reading state to avoid race conditions during concurrent writes
			messagesMu.Lock()
			// Create a copy of the slice so the encoded data is stable outside the lock
			response := struct {
				Messages []Message \`json:"messages"\`
			}{Messages: append([]Message{}, messages...)}
			messagesMu.Unlock()

			// 200 OK is sent implicitly with the first write
			json.NewEncoder(w).Encode(response)

		case http.MethodPost:
			var input struct {
				Text string \`json:"text"\`
			}
			// Decode the JSON payload and validate that text is not empty or pure whitespace
			if err := json.NewDecoder(r.Body).Decode(&input); err != nil || strings.TrimSpace(input.Text) == "" {
				w.WriteHeader(http.StatusBadRequest)
				json.NewEncoder(w).Encode(map[string]string{"error": "invalid message"})
				return
			}

			// Lock state while generating the new ID and appending to the slice
			messagesMu.Lock()
			message := Message{
				ID:   len(messages) + 1,
				Text: input.Text,
			}
			messages = append(messages, message)
			messagesMu.Unlock()

			// Respond with 201 Created and the created message object
			w.WriteHeader(http.StatusCreated)
			json.NewEncoder(w).Encode(struct {
				Message Message \`json:"message"\`
			}{Message: message})

		default:
			// Respond with 405 Method Not Allowed for unsupported HTTP verbs
			w.WriteHeader(http.StatusMethodNotAllowed)
			json.NewEncoder(w).Encode(map[string]string{"error": "method not allowed"})
		}
	})

	// Outer middleware wrapper to assign unique request IDs
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// Atomically increment the counter to ensure thread-safe ID generation
		id := atomic.AddUint64(&requestCount, 1)
		w.Header().Set("X-Request-ID", fmt.Sprintf("req-%d", id))

		// Delegate request execution to the inner route handler
		handler.ServeHTTP(w, r)
	})
}`}</SyntaxHighlighter>
    </div>
  );
}
