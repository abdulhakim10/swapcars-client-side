import { Footer } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Foot = () => {
    return (
        <div>
       <Footer container={true}>
  <div className="w-full text-center">
    <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
      <h2 className='text-3xl font-semibold text-green-900'>Swapcars</h2>
      <Footer.LinkGroup>
        <Footer.Link href="#">
          About
        </Footer.Link>
        <Footer.Link href="#">
          Privacy Policy
        </Footer.Link>
        <Footer.Link href="#">
          Licensing
        </Footer.Link>
        <Footer.Link href="#">
          Contact
        </Footer.Link>
      </Footer.LinkGroup>
    </div>
    <Footer.Divider />
    <Footer.Copyright
      href="#"
      by="Flowbite™"
      year={2022}
    />
  </div>
</Footer>
        </div>
    );
};

export default Foot;