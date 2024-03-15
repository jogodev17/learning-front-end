'use client'

import React, { useState } from 'react';

interface State {
    title: string;
    content: string | null;
    authorname: string | null;
}

const AddPostPage: React.FC = () => {
    const initialState: State = {
        title: '',
        content: null,
        authorname: null,
    };

    const [state, setState] = useState<State>(initialState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setState(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        // Here you can access the updated state via `state`.
        try {
    const body = { title, content };
    await fetch('/api/post', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    await Router.push('/drafts');
  } catch (error) {
    console.error(error);
  }
        setState({
            title: '',
            content: '',
            authorname: '',
        });
    };

    return (
        <main className='w-full py-8 px-12'>
            <h1 className='text-2xl font-semibold'>Add Post:</h1>
            <form onSubmit={handleSubmit} className='flex-1 flex flex-col gap-1 py-2 border-2 border-black h-32'>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" name='title' id='title' placeholder='Title here...' className='border-2 border-black p-1 rounded-sm'
                        value={state.title} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="content">Content:</label>
                    <input type="text" name='content' id='content' placeholder='content here...' className='border-2 border-black p-1 rounded-sm'
                        value={state.content ?? ''} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="authorname">Author:</label>
                    <input type="text" name='authorname' id='authorname' placeholder='author here...' className='border-2 border-black p-1 rounded-sm'
                        value={state.authorname ?? ''} onChange={handleChange} />
                </div>

                <button className='py-2 px-12 bg-emerald-400 text-white' type='submit'>
                    ADD
                </button>

            </form>
        </main>
    );
};

export default AddPostPage;
