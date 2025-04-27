# ✂️ Slices in Go

## Definition
**Slices** are dynamic, flexible views over arrays in Go.

- **Key Characteristics**:
  - Slices are **reference types**, meaning they share the underlying array unless explicitly copied.
  - They are more flexible than arrays because their size can grow or shrink dynamically.
  - A slice does not store data itself but provides access to the underlying array.

---

## Example 1: Empty Slice

```go
package main

import "fmt"

func main() {
    var users []string
    fmt.Println(users == nil) 
}
```

---

## Example 2: Initialized Slice

```go
package main

import "fmt"

func main() {
    var slice []string = []string{"messi", "ronaldo"}
    fmt.Println(slice) 
}
```

---

## Notes
- Slices are the preferred way to work with collections in Go due to their flexibility.
- You can use built-in functions like `append()` to add elements to a slice dynamically.
- Slices are often used in conjunction with `range` for iteration.

---
