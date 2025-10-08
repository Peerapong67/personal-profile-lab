import React from 'react';
import ProfileCard from './ProfileCard';

function App() {
    // ข้อมูลโปรไฟล์ตัวอย่าง

    const myProfile = {
    name: "พีรพงศ์ ปัญญาสัน",
    studentId: "67543210042-7", 
    major: "วิศวกรรมซอฟต์แวร์",
    year: 2,
    age: 25,
    gpa: 3.5,
    email: "pr3kubim@gmail.com",
    hobbies: [
        "เล่นเกม",
        "ดูหนัง",
        "เรียนรู้ภาษาอังกฤษ",       
    ],
    skills: [
        "Database SQL",
        "HTML/CSS",
        "C language",
        "Git",
        "Node.js",
        "Python"
    ],
    socialLinks: [
        { platform: "GitHub", url: "https://github.com/Peerapong67" },
        { platform: "LinkedIn", url: "https://www.linkedin.com/in/peerapong-panyasan-076617213/" },
        { platform: "Instagram", url: "https://www.instagram.com/pr3kubim_th/" },
        { platform: "Facebook", url: "https://www.facebook.com/Prekub"}
    ]
};

    return (
        <div style={{ 
            minHeight: '100vh', 
            background: 'linear-gradient(45deg, #f0f2f5 0%, #e8eaf6 100%)',
            padding: '20px'
        }}>
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h1 style={{ 
                    color: '#333', 
                    fontSize: '32px',
                    margin: '20px 0'
                }}>
                    🎓 Personal Profile Card
                </h1>
                <p style={{ color: '#666', fontSize: '16px' }}>
                    Lab 3.1 - ทำความรู้จักกับ React.js และ JSX
                </p>
            </div>
            
            <ProfileCard profile={myProfile} />
        </div>
    );
}

export default App;