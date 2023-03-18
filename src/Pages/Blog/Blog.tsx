import { useState } from 'react';

import MarkdownList from '../../Components/Molecules/Markdown/MarkdownList';
import MarkdownUploader from '../../Components/Molecules/Markdown/MarkDownUploader';

export const Blog = () => {
  const [showForm, setShowForm] = useState(false)
  return (
    <div>
        <h1>Blog</h1>
        {showForm && <MarkdownUploader />}
          <MarkdownList  />
    </div>
  );
}
