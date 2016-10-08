//Code React element here

// const title = React.createElement('h1', {}, 'My First React Code');
// const paragraph = React.createElement('p', {}, 'Writing some more HTML. Cool stuff!');
// const container = React.createElement('div', {}, [title, paragraph]);
 
// ReactDOM.render(
//   container,
//   document.getElementById('main')
// );

const unorderedlist = React.createElement('ul',{className: 'me__interests'},[
  React.createElement('li',{},'JavaScript'),
  React.createElement('li',{},'React'),
  React.createElement('li',{},'Movies'),
  React.createElement('li',{},'Ice cream')
]);

const meInReact = React.createElement('div' ,{className: 'me' }, [
  React.createElement('h1',{},'An Awesome Person'),
  React.createElement('p',{},'Who is learning React'),
  unorderedlist
]);

ReactDOM.render(meInReact,document.getElementById('main'));
