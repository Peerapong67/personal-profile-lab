import React, { useState } from 'react';
import './ProfileCard.css';

function ProfileCard({ profile }) {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [favoriteHobbies, setFavoriteHobbies] = useState([]);
    const [showContactForm, setShowContactForm] = useState(false);
    const [contactMessage, setContactMessage] = useState("");
    const [viewCount, setViewCount] = useState(0);

    const toggleTheme = () => {
        console.log("Toggle theme:", !isDarkMode);
        setIsDarkMode(prev => !prev);
    };

    const getInitials = (name) => {
        return name
            .split(' ')
            .map(n => n[0])
            .join('')
            .toUpperCase();
    };

    const cardClassName = `profile-card ${isDarkMode ? 'dark-mode' : ''}`;

    const handleCardClick = () => {
        setViewCount(prevCount => prevCount + 1);
    };

    const toggleFavoriteHobby = (hobby) => {
        setFavoriteHobbies(prevFavorites =>
            prevFavorites.includes(hobby)
                ? prevFavorites.filter(h => h !== hobby) // ลบ hobby
                : [...prevFavorites, hobby]              // เพิ่ม hobby
        );
    };

    const handleContactClick = () => {
        setShowContactForm(true);
    };

    const handleContactSubmit = (e) => {
        e.preventDefault();
        console.log(`ส่งข้อความไปยัง ${profile.name}: ${contactMessage}`);
        setContactMessage("");
        setShowContactForm(false);
    };

    const handleSkillClick = (skill) => {
        alert(`${profile.name} มีความเชี่ยวชาญใน ${skill}!`);
    };

    return (
        <div className={cardClassName} onClick={handleCardClick}>
            {/* View counter */}
            <div className="view-counter">
                👁️ Views: {viewCount}
            </div>

            {/* Toggle Dark Mode */}
            <div className="profile-header">
                <button
                    className="theme-toggle"
                    onClick={(e) => { e.stopPropagation(); toggleTheme(); }}
                    title={isDarkMode ? 'เปลี่ยนเป็น Light Mode' : 'เปลี่ยนเป็น Dark Mode'}
                >
                    {isDarkMode ? '☀️' : '🌙'}
                </button>
            </div>

            {/* ส่วนหัว - รูปและชื่อ */}
            <div className="profile-header">
                <div className="profile-avatar">
                    {getInitials(profile.name)}
                </div>
                <h1 className="profile-name">{profile.name}</h1>
                <div className="student-id">{profile.studentId}</div>
            </div>

            {/* ข้อมูลพื้นฐาน */}
            <div className="profile-info">
                <div className="info-item">
                    <div className="info-label">สาขา</div>
                    <div className="info-value">{profile.major}</div>
                </div>
                <div className="info-item">
                    <div className="info-label">ชั้นปี</div>
                    <div className="info-value">{profile.year}</div>
                </div>
                <div className="info-item">
                    <div className="info-label">อายุ</div>
                    <div className="info-value">{profile.age} ปี</div>
                </div>
                <div className="info-item">
                    <div className="info-label">เกรด</div>
                    <div className="info-value">
                        {profile.gpa.toFixed(2)}
                        {profile.gpa >= 3.5 && ' 🌟'}
                    </div>
                </div>
            </div>

            {/* Achievements */}
            <div className="profile-section">
                <h3>🏆 Achievements</h3>
                <div className="achievements">
                    {profile.gpa >= 3.5 && (
                        <span className="achievement-badge">🌟 เกียรตินิยม</span>
                    )}
                    {profile.skills.length >= 5 && (
                        <span className="achievement-badge">💪 Multi-skilled</span>
                    )}
                    {profile.year > 1 && (
                        <span className="achievement-badge">🎓 รุ่นพี่</span>
                    )}
                </div>
            </div>

            {/* งานอดิเรก */}
            <ul className="hobbies-list">
                {profile.hobbies.map((hobby, index) => (
                    <li
                        key={index}
                        className={`hobby-item ${favoriteHobbies.includes(hobby) ? 'favorite' : ''}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            toggleFavoriteHobby(hobby);
                        }}
                    >
                        {hobby} {favoriteHobbies.includes(hobby) && '💖'}
                    </li>
                ))}
            </ul>

            {/* ทักษะ */}
            <div className="profile-section">
                <h3>💻 ทักษะ</h3>
                <div className="skills">
                    {profile.skills.map((skill, index) => (
                        <div
                            key={index}
                            className="skill-tag"
                            onClick={() => handleSkillClick(skill)}
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </div>

            {/* Social Links */}
            {profile.socialLinks && profile.socialLinks.length > 0 && (
                <div className="profile-section">
                    <h3>🌐 Social Media</h3>
                    <div className="social-links">
                        {profile.socialLinks.map((social, index) => (
                            <div
                                key={index}
                                className="social-link"
                                onClick={() => window.open(social.url, "_blank")}
                            >
                                {social.platform}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Contact Form */}
            {showContactForm && (
                <div className="contact-form" onClick={(e) => e.stopPropagation()}>
                    <form onSubmit={handleContactSubmit}>
                        <textarea
                            value={contactMessage}
                            onChange={(e) => setContactMessage(e.target.value)}
                            placeholder="พิมพ์ข้อความของคุณ..."
                            required
                        />
                        <button type="submit">ส่งข้อความ</button>
                        <button type="button" onClick={() => setShowContactForm(false)}>ยกเลิก</button>
                    </form>
                </div>
            )}

            {/* ปุ่มเปิดฟอร์ม */}
            {!showContactForm && (
                <button
                    className="contact-button"
                    onClick={(e) => {
                        e.stopPropagation();
                        handleContactClick();
                    }}
                >
                    📧 ติดต่อ {profile.name}
                </button>
            )}
        </div>
    );
}

export default ProfileCard;
