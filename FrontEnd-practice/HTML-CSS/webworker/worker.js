// Listen for messages from the main thread
self.addEventListener('message', function(e) {
    const number = e.data;
    
    // Heavy computation: Calculate Fibonacci recursively
    function fibonacci(n) {
        if (n <= 1) return n;
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
    
    // Calculate and send progress updates
    const result = fibonacci(number);
    
    // Send the final result back to the main thread
    self.postMessage({
        type: 'result',
        value: result,
        input: number
    });
}); 

let arr = [1,2,3,4,5,6,7,8,9,10];


