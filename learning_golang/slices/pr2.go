package main

import "fmt"

func main() {
	num := [] int {1, 2, 3}
	num_copy := make([]int, len(num))
	copy(num_copy, num)

	num_copy[0] = 4
	fmt.Println(num)
	fmt.Println(num_copy)
}