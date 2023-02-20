import React, { useEffect, useState } from "react";

function Home() {
  const [avatar, setAvatar] = useState();

  useEffect(() => {
    console.log("call back");

    return () => {
      avatar && URL.revokeObjectURL(avatar.preview);
    };
    // return avatar &&  URL.revokeObjectURL(avatar.preview);
  }, [avatar]);

  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setAvatar(file);
    console.log(`set ${file.preview}`);
  };

  return (
    <div>
      <input onChange={handlePreviewAvatar} type="file" />
      {avatar && <img src={avatar.preview} width="100px" alt="" />}
    </div>
  );
}

export default Home;
