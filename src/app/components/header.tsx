'use client';
import Link from 'next/link';
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { LuGithub, LuLinkedin } from 'react-icons/lu';
import {
  RiBookMarkFill,
  RiBox3Fill,
  RiGraduationCapFill,
  RiLightbulbFill,
  RiMailFill,
  RiUserFill
} from 'react-icons/ri';

export default function Header() {
  return (
    <header className='flex justify-between p-6'>
      <div></div>
      <div className='flex'>
        <LuGithub size={28}></LuGithub>
        <hr className='mx-3' />
        <LuLinkedin size={28}></LuLinkedin>
      </div>
    </header>
  )
}
