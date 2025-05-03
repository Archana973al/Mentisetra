const Stream = () => {
    return (
      <main className="stream-page">
        <section className="section">
          <div className="container">
            <h1 className="section-title">Live Learning Stream</h1>
            <div className="stream-container">
              <div className="video-player">
                <div className="placeholder-video">
                  <p>Live stream will appear here</p>
                </div>
              </div>
              <div className="chat-container">
                <h3>Live Chat</h3>
                <div className="chat-messages">
                  <p>Chat messages will appear here during live sessions</p>
                </div>
                <div className="chat-input">
                  <input type="text" placeholder="Type your message..." />
                  <button className="btn btn-primary">Send</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }
  
  export default Stream