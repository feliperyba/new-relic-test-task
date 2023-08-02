# New Relic Dev Test

# Installation
## Prerequisites
- [NodeJs](https://nodejs.org/)

```
$ npm install
```

# Usage
To run the application on dev mode run the following at the project root folder
```
$ npm start
```
To run test use any of the following
```
$ npm run test

$ npm run test:verbose

$ npm run test:watch
```
To run distribution bundle
```
$ npm run build
```
# Comments
This project was a very interesting one to solve.

One of my main goals towards the architecture was to be very scalable and extendable while keeping it simple on complexity.

After having in mind what architecture I would like to achieve on this application, my next step would be modeling/research the data and data structure we would need to use for this specific problem.

### **Sorting the data**
Started looking into how to optimize the sort from the JSON structure available. By specs, we have the information on how the apdex numeric range works so based on the [BigO chart](https://www.bigocheatsheet.com/) and reading more about [Linear Sorts (Week 14))](https://www.radford.edu/nokie/classes/360/Linear.Sorts.html), I decided to implement a [Radix sort](https://medium.com/@verdi/intermediate-sorting-algorithms-merge-quick-and-radix-sort-539686c5063b) for maximum optimization based on the information we have and group it using a hash map for maximum optimization on search/insert / remove for later operations implementation. Through the whole process, I was aiming to achieve the best time complexity I could take into consideration the time and scope to still keep it simple and scalable for further complex optimizations/changes.

After having the data part solved, implemented simple unit testing to confirm the functionality before continue on the UI side.

### **Implementing a Component System**
On the UI architecture for me was a simple choice on went with a Component approach, using patterns as [Composite](https://refactoring.guru/design-patterns/composite) and a [pseudo version of Builder](https://refactoring.guru/design-patterns/builder), in that way I've enabled enough abstraction to create complex HTML elements compositions with dynamic properties and behaviors with great potential for scalability, extension, and testing.

### **Testing the App**
My approach for testing was simple: Test everything.

I've organized the test folders inside each scope, in this way is easier to fix/implement changes on code and test (personal preference).

Aiming to keep the test less biased as possible and to contain the full expected business logic covered. The test was not difficult to implement, especially on the UI side, being able to test functionality and DOM separately.

### **Styling the App**
Indeed I'm no CSS Wizard, so I tried to play safe as possible here and implement a simple flexbox approach to organize the DOM and keep consistent especially with IE 11.

On the font side, I couldn't find the font free, so I kept the solution trying to find it locally if exists with no current fallback solution.

### **Closing Notes**
Thanks for the interesting challenge, I had good fun while doing it and I gave my best on it.

It is indeed a very simple scope but as more time to spend thinking on that solution, more potential on how you can scale it you see, especially since you are not bound by any 3rd party libraries.

# Authors
- [Felipe Rybakovas](http://rybakovas.me)
