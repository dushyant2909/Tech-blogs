import React, { useContext, useEffect } from 'react';
import Header from './Components/Header';
import Blogs from './Components/Blogs';
import Pagination from './Components/Pagination';
import { AppContext } from './Context/AppContext';

export const App = () => {
  const { fetchBlogPosts } = useContext(AppContext);

  useEffect(() => {
    const fetchData = async () => {
      await fetchBlogPosts();
    };
    fetchData();
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-x-1">
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
};

export default App;
