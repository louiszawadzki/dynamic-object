const lg = console.log;

const styledComponents = (...args) => {
  const strings = args.shift(); // Store array of strings in variable
  return strings.reduce((result, element, index, array) => {
    result.push(element); // Add the next element
    (index < array.length - 1) && result.push(args[index]); // Add the next interpolated value
    return result;
  }, []).join(''); // Join everything to get the final string
};

const padding = '6px';
lg(styledComponents`padding: ${padding}`);