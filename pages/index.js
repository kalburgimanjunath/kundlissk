import { useDropzone } from 'react-dropzone';
import React, { useEffect, useState } from 'react';
export default function Home() {
  const KundaliForm = () => {
    const thumbsContainer = {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 16,
    };

    const thumb = {
      display: 'inline-flex',
      borderRadius: 2,
      border: '1px solid #eaeaea',
      marginBottom: 8,
      marginRight: 8,
      width: 100,
      height: 100,
      padding: 4,
      boxSizing: 'border-box',
    };

    const thumbInner = {
      display: 'flex',
      minWidth: 0,
      overflow: 'hidden',
    };

    const img = {
      display: 'block',
      width: 'auto',
      height: '100%',
    };
    const Previews = (props) => {
      const [files, setFiles] = useState([]);
      const { getRootProps, getInputProps } = useDropzone({
        accept: {
          'image/*': [],
        },
        onDrop: (acceptedFiles) => {
          setFiles(
            acceptedFiles.map((file) =>
              Object.assign(file, {
                preview: URL.createObjectURL(file),
              })
            )
          );
        },
      });

      const thumbs = files.map((file) => (
        <div style={thumb} key={file.name}>
          <div style={thumbInner}>
            <img
              src={file.preview}
              style={img}
              // Revoke data uri after image is loaded
              onLoad={() => {
                URL.revokeObjectURL(file.preview);
              }}
            />
          </div>
        </div>
      ));

      useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
      }, []);
      return (
        <div>
          <div>Name </div>
          <div>DOB </div>
          <div>Time </div>
          <div>Birth Place</div>
          <div>Gotra</div>
          <div>Rashi </div>
          <div>Nakshtra</div>
          <div>Charan </div>
          <div>Gan </div>
          <div>Nadi </div>
          <div>Hight </div>
          <div>Education </div>
          <div>Work</div>
          <div>Father Name</div>
          <div>Address</div>
          <div>Phone No</div>
          <div>
            Photo
            <div>
              <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
              </div>
              <aside style={thumbsContainer}>{thumbs}</aside>
            </div>
          </div>
        </div>
      );
    };
    return <Previews />;
  };

  return (
    <div>
      hello world
      <KundaliForm />
    </div>
  );
}
