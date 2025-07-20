package main

import "fmt"

func main() {
	const a = 10
	const Pi float64 = 3.14

	fmt.Printf("a: %d, Type of a: %T\nPi: %f, Type of Pi: %T\n", a, a, Pi, Pi)

	const (
		L    = 5
		W    = 10
		Area = L * W
	)

	fmt.Printf("L: %d, W: %d, Area: %d\n", L, W, Area)

	const (
		One = iota
		Two
		Three
	)

	fmt.Printf("One: %d, Two: %d, Three: %d\n", One, Two, Three)

	z := float64(a)
	fmt.Printf("z: %f, Type of z: %T\n", z, z)
}
