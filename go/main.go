package main

import (
    "encoding/json"
    "log"
    "net/http"
    "github.com/gorilla/mux"
    "sync"
    "github.com/google/uuid"
)

var users sync.Map

// função principal
func main() {
    router := mux.NewRouter()
    router.HandleFunc("/users/{id}", GetUser).Methods("GET")
    router.HandleFunc("/users", CreateUser).Methods("POST")

    log.Fatal(http.ListenAndServe(":8080", router))
}


func GetUser(w http.ResponseWriter, r *http.Request) {
    params := mux.Vars(r)

    result, ok := users.Load(params["id"])

    if ok {
	w.Header().Set("Content-Type", "application/json")
        json.NewEncoder(w).Encode(result)
    }
}

func CreateUser(w http.ResponseWriter, r *http.Request) {
    var user User
    _ = json.NewDecoder(r.Body).Decode(&user)
    uuid, err := uuid.NewUUID()

    if err != nil {

    }
    
    user.ID = uuid.String()

    users.Store(user.ID, user)
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(user)
}




type User struct {
    ID        string   `json:"id,omitempty"`
    Username  string   `json:"username,omitempty"`
    Password  string   `json:"password,omitempty"`
}
