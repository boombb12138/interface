import React, { useContext } from 'react';

import { Web3Data } from '../web3-data-provider/Web3Provider';
// import { Web3Data } from '../web3-data-provider/Web3ContextProvider';

export type Web3ContextData = {
  web3ProviderData: Web3Data;
};
// 1 创建context
export const Web3Context = React.createContext({} as Web3ContextData);

// 2 给context提供值 在Web3Provider这个文件
{/* <Web3Context.Provider */}

// 3 在—_app中去包裹provider

// 4 consume值 用useContext
export const useWeb3Context = () => {
  const { web3ProviderData } = useContext(Web3Context);
  if (Object.keys(web3ProviderData).length === 0) {
    throw new Error(
      'useWeb3Context() can only be used inside of <Web3ContextProvider />, ' +
        'please declare it at a higher level.'
    );
  }

  return web3ProviderData;
};
