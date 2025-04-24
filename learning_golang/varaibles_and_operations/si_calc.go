package main
import "fmt"

func main() {
	var P, r, t float64
	fmt.Println("Enter the principal amount: ");
	fmt.Scan(&P)
	fmt.Println("Enter the rate of interest: ");
	fmt.Scan(&r)
	fmt.Println("Enter the time in years: ");
	fmt.Scan(&t)

	SI := (P * r * t) / 100
	
	fmt.Printf("Simple Interest is: %.2f\n", SI)
}