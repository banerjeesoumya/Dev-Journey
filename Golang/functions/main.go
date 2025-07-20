package main

import "fmt"

func Hello(a, b int) int {
	println("Hello, World! Sum:", a+b)
	return a + b
}

func Add (numbers ...int) int {
	sum := 0
	for i := range numbers {
		sum += numbers[i]
	}
	return sum
}

func main() {
	ans := Hello(3, 4)
	fmt.Println("The answer is:", ans)
	fmt.Println("Sum of 1, 2, 3, 4, 5 is:", Add(1, 2, 3, 4, 5));
	fmt.Println("Sum of 10, 20, 30 is:", Add(10, 20, 30))
}