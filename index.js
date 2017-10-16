const lg = console.log;

const object = (...args) => {
  const strings = args.shift(); // Store array of strings in variable
    return (props) => JSON.parse(strings.reduce((result, element, index, array) => {
    result.push(element); // Add the next element
    (index < array.length - 1) && result.push(args[index](props)); // Add the next interpolated value
    return result;
  }, []).join('')); // Join everything to get the final string
};

const div = object`{
  ${props => props.key}: ${props => props.value},
}`;

const element = (props) => div(props)

lg(element({
  key: 'toto',
  value: 'blabla',
}).toto);

lg(element({
  key: 'toto2',
  value: 'blabla2',
}));
