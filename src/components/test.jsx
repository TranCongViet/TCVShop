import { useUser } from '@clerk/clerk-react';
import { useEffect, useState } from 'react';

export default function TestClerk() {
  const { user, isSignedIn } = useUser();
  const [status, setStatus] = useState('');
  const [birthday, setBirthday] = useState('123');
  useEffect(() => {
    const updateMetadata = async () => {
      try {
        // Gộp dữ liệu cũ với dữ liệu mới
        user?.update({
          publicMetadata: { birthday },
        });
        setStatus('Đã cập nhật metadata thành công!');
      } catch (err) {
        console.error('Lỗi khi update metadata:', err);
        setStatus('Có lỗi xảy ra khi cập nhật metadata');
      }
    };
    updateMetadata();
  }, []);
  if (!isSignedIn) return <div>Vui lòng đăng nhập</div>;

  return (
    <div>
      <p>Status: {status}</p>
      <pre>{JSON.stringify(user.publicMetadata, null, 2)}</pre>
    </div>
  );
}
