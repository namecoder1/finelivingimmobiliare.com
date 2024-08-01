import { PortableText } from '@portabletext/react';

const components = {
  marks: {
    strong: ({children}) => {
      return <b className='font-bold'>{children}</b>
    },
    link: ({value, children}) => {
      const { href } = value
      return <a className='text-accent hover:underline underline-offset-2' href={href} target="_blank">{children}</a>
    },
  }
}

const PortableTextComponent = ({ value }) => {
  return (
    <div className="leading-7 flex flex-col prose lg:prose-lg w-full">
      <PortableText
        value={value}
        components={components}
      />
    </div>
  );
};

export default PortableTextComponent;



