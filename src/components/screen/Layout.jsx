//vendor
import React from 'react';
//styles
import '../../styles/layout.css';
//components
import { CalculateResult } from '../CalculateResult';
import { MyDropzone } from '../Dropzone';
import { ViewData } from '../ViewData';

export const Layout = () => {
  return (
    <div className='main'>
      <h1 className='main__title'>DROPZONE VIEW</h1>
      <div className='main__center'>
        <MyDropzone />
        <div></div>
        <div className='center__rigth'>
          <div className="main__btn">
            <CalculateResult />
          </div>
          <p className='center__rigth--item'>Resultados MSE</p>
        </div>
      </div>
      <div>
        <ViewData />
      </div>
    </div>
  );
};
