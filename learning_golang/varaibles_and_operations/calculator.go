package main

import "fmt"

func main() {
	var num1, num2 int
	var opr string

	fmt.Println("Enter the firt number: ")
	fmt.Scanln(&num1)

	fmt.Println("Enter the operator (+, -, *, /): ");
	fmt.Scanln(&opr)

	fmt.Println("Enter the second number: ")
	fmt.Scanln(&num2)

	var res int

	switch opr {
	case "+":
		res = num1 + num2

	case "-":
		res = num1 - num2

	case "*":
		res = num1 * num2

	case "/":
		if (num2 == 0) {
			fmt.Println ("Error: Division by zero is not allowed.")
			return
		} else {
			res = num1 / num2
		}
	default:
		fmt.Println("Invalid operator. Please use +, -, *, or /.")
		return
	}
	fmt.Printf("%d %s %d = %d", num1, opr, num2, res)
}