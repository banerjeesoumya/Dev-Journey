package main 

import "fmt"

func main() {
	var arr[5] int = [5] int {2, 4, 6, 8, 10}
	prod := 1
	for _, val := range arr {
		prod = prod * val
	}
	fmt.Printf("The product of the array elements is: %d\n", prod)
}