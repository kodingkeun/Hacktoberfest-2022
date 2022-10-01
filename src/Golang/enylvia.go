package main

import "fmt"

func main() {
	//	program to check if a number is prime or not
	var num int
	var i int
	var flag int
	flag = 0
	fmt.Print("Enter a number: ")
	fmt.Scan(&num)
	for i = 2; i <= num/2; i++ {
		if num%i == 0 {
			flag = 1
			break
		}
	}
	if flag == 1 {
		fmt.Println("Number is not prime")
	} else {
		fmt.Println("Number is prime")
	}
}
