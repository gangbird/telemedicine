document.addEventListener('DOMContentLoaded', function() {
    const cameraButton = document.getElementById('camera-button');
    const microphoneButton = document.getElementById('microphone-button');
    const endCallButton = document.getElementById('end-call-button');
    const chatButton = document.getElementById('chat-button');
    const closeChatButton = document.getElementById('close-chat-button');
    const cameraOverlay = document.getElementById('camera-off-overlay');
    const chatContainer = document.getElementById('chat-container');
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');
    const sendButton = document.getElementById('send-button');
    const farmerImage = document.getElementById('farmer-image'); // 농민 사진 요소

    let isCameraOn = true;
    let isMicrophoneOn = true;
    let isChatOpen = false;

    cameraButton.addEventListener('click', function() {
        isCameraOn = !isCameraOn;
        if (isCameraOn) {
            farmerImage.style.display = 'block'; // 농민 사진 보이기
            cameraOverlay.style.display = 'none'; // 오버레이 숨기기
        } else {
            farmerImage.style.display = 'none'; // 농민 사진 숨기기
            cameraOverlay.style.display = 'flex'; // 오버레이 보이기
        }
    });

    microphoneButton.addEventListener('click', function() {
        isMicrophoneOn = !isMicrophoneOn;
        microphoneButton.style.backgroundColor = isMicrophoneOn ? '#007bff' : 'gray';
    });

    endCallButton.addEventListener('click', function() {
        const confirmEndCall = confirm('통화를 종료하시겠습니까?');
        if (confirmEndCall) {
            window.location.href = 'index.html';
        }
    });

    chatButton.addEventListener('click', function() {
        isChatOpen = true;
        chatContainer.style.display = 'flex';
    });

    closeChatButton.addEventListener('click', function() {
        isChatOpen = false;
        chatContainer.style.display = 'none';
    });

    sendButton.addEventListener('click', function() {
        const message = chatInput.value.trim();
        if (message !== '') {
            const messageElement = document.createElement('div');
            messageElement.textContent = message;
            chatMessages.appendChild(messageElement);
            chatInput.value = '';
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    });

    chatInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            sendButton.click();
        }
    });
});
