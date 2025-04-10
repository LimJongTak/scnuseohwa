import React, { useState } from 'react';
import './notice.scss';

const noticeData = [
  { id: 1, title: '2024 강원대학교 백령대동제 개최 안내' },
  { id: 2, title: '2024 강원대학교 백령대동제 개최 안내' },
  { id: 3, title: '신규 게시물' },
  { id: 4, title: '2024 강원대학교 백령대동제 개최 안내' },
  { id: 5, title: '신규 게시물' },
  { id: 6, title: '2024 강원대학교 백령대동제 개최 안내' },
];

function NoticePage() {
  const [page, setPage] = useState(1);
  const noticesPerPage = 3;

  const startIndex = (page - 1) * noticesPerPage;
  const endIndex = page * noticesPerPage;
  const currentNotices = noticeData.slice(startIndex, endIndex);

  return (
    <div className="notice-container">
      <div className="notice-header">
        <h2>키워드 검색</h2>
      </div>
      <div className="notice-list">
        {currentNotices.map((notice) => (
          <div key={notice.id} className="notice-item">
            <p>{notice.title}</p>
            <span>상세보기</span>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button
          onClick={() => setPage(page > 1 ? page - 1 : 1)}
          disabled={page === 1}
        >
          1
        </button>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page === 2}
        >
          2
        </button>
      </div>
    </div>
  );
}

export default NoticePage;
