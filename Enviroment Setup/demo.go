// Statically Typed Example - Go

package main

import "fmt"

func main() {
	var myVar int = 10;
	fmt.Printf(myVar)

	myVar = 'Hello World'
	// Attempting to change it will cause error
	// Correct way to change =>
	
	var myOtherVar string = 'Hello World'
	fmt.Printf(myOtherVar)
}