"use client";

import React, { useEffect } from 'react';
import { useGlobalState } from '../context/globalProvider';
import Tasks from '../components/Tasks/Tasks';

function page() {
  const {incompleteTasks} = useGlobalState();
  
  return (
    <Tasks title='Incomplete Tasks' tasks = {incompleteTasks}/>
  );
};

export default page;