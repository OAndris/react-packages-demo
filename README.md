# Demo app showcasing some awesome React packages

## Packages:

- React Loader Spinner (https://www.npmjs.com/package/react-loader-spinner)

  ```
  npm i react-loader-spinner
  import Loader from 'react-loader-spinner';
  <Loader type="Puff" color="#00BFFF" height={100} width={100} timeout={3000} />
  ```

- React Animated Burgers (https://www.npmjs.com/package/react-animated-burgers)

  ```
  npm i react-animated-burgers styled-components
  import { HamburgerSpin } from 'react-animated-burgers';
  <HamburgerSpin buttonColor="red" barColor="#F5F5F5" {...{ isActive, toggleButton }} />
  ```

- React Responsive Carousel (https://www.npmjs.com/package/react-responsive-carousel)

  ```
  npm i react-responsive-carousel
  import { Carousel } from 'react-responsive-carousel'
  import "react-responsive-carousel/lib/styles/carousel.min.css";
  <Carousel><div><img src="assets/1.jpeg" /><p className="legend">Legend 1</p></div><div><img src="assets/2.jpeg" /><p className="legend">Legend 2</p></div></Carousel>
  ```

- React CountUp (https://www.npmjs.com/package/react-countup)

  ```
  npm i react-countup
  import CountUp from 'react-countup';
  <CountUp end={100} />
  <CountUp end={100} delay={2} />
  <CountUp end={100} duration={5} />
  ```

- React Markdown (https://www.npmjs.com/package/react-markdown)

  ```
  npm i react-markdown
  const ReactMarkdown = require('react-markdown')
  <ReactMarkdown source={'# This is a header\n\nAnd this is a paragraph.'} />
  ```

- react-chartjs-2 (https://github.com/jerairrest/react-chartjs-2)

  ```
  npm install --save react-chartjs-2 chart.js
  import { Doughnut } from 'react-chartjs-2';
  <Doughnut data={...} />
  ```

## Sources used:

- [Five awesome React packages to check out](https://medium.com/javascript-in-plain-english/five-awesome-react-packages-to-check-out-1ee42f2c19f7) (Medium article by Varun Chilukuri)
- [Using Chart.js With React](https://www.youtube.com/watch?v=Ly-9VTXJlnA) (Youtube video by Traversy Media)
- [Creating a dashboard with React and Chart.js](https://www.createwithdata.com/react-chartjs-dashboard/) (article by Peter Cook)
