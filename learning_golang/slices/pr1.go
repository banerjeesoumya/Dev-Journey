package main

import "fmt"

func main() {
	users := [] string{"messi", "ronaldo"}
	fmt.Println("Before append")
	fmt.Println(users)
	users = append(users, "neymar")
	fmt.Println("After append")
	fmt.Println(users)
}