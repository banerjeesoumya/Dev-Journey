📦 Arrays
Definition:

Fixed-size container of elements of the same type.

When you assign or pass an array → it copies everything (not a reference).

Access elements by index: arr[0], arr[1], etc.

```go
package main
import "fmt"

func main(){
    var a[5] int = [5] int{1, 2, 3, 4, 5}
    fmt.Println(a) 
}
```

Sum of elements in an array

```go
package main

import "fmt"

func main() {
	sum := 0
	var arr[5] int = [5] int {1, 2, 3, 4, 5}
	for i := range arr {
		sum = sum + arr[i]
	}
	fmt.Println("Sum of array elements is:", sum) 
}
```

2-D Array :

```go
package main

import "fmt"

func main() {
	var maze [3][3]int = [3][3]int{
		{1, 2, 3},
		{4, 5, 6},
		{7, 8, 9},
	}
	fmt.Print(maze)	
	fmt.Println()
}
```