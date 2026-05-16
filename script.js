// ব্যবহারকারীকে স্বাগত জানানোর ফাংশন
function greetUser() {
    alert('নমস্কার! আমি মুহাম্মাদ মিরাজ। আপনাকে আমার ওয়েবসাইটে স্বাগতম! 🎉');
}

// পৃষ্ঠা লোড হলে একটি বার্তা দেখান
document.addEventListener('DOMContentLoaded', function() {
    console.log('ওয়েবসাইট সফলভাবে লোড হয়েছে! 🚀');
    console.log('আমার সম্পর্কে আরও জানতে সাইট ব্রাউজ করুন!');
});

// স্মুথ স্ক্রোলিং
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// বাটনে হোভার ইফেক্ট
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    button.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});

// কনসোলে স্বাগত বার্তা
console.log('%c স্বাগতম! 👋', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%c এটি মুহাম্মাদ মিরাজের ব্যক্তিগত ওয়েবসাইট', 'color: #764ba2; font-size: 14px;');
console.log('%c প্রোগ্রামিং শিখছি... আপনিও পারবেন! 💻', 'color: #667eea; font-size: 14px;');
