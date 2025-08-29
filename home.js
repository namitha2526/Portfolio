 /* ===== Theme Toggle ===== */
    const toggle = document.getElementById('themeToggle');
    const body = document.body;
    if(localStorage.getItem('theme')==='light') { body.classList.add('light'); toggle.textContent='🌞'; }
    toggle.onclick = () => {
      body.classList.toggle('light');
      if(body.classList.contains('light')) { localStorage.setItem('theme','light'); toggle.textContent='🌞'; }
      else { localStorage.setItem('theme','dark'); toggle.textContent='🌙'; }
    };

    /* ===== Cursor Effect ===== */
    const cursor = document.getElementById('cursor');
    document.addEventListener('mousemove', e => {
      cursor.style.top = e.clientY+'px';
      cursor.style.left = e.clientX+'px';
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      document.body.appendChild(trail);
      trail.style.top = e.clientY+'px';
      trail.style.left = e.clientX+'px';
      setTimeout(()=>{ trail.remove(); }, 500);
    });

    /* ===== Background Animation ===== */
    const canvas = document.getElementById('bgCanvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    function resizeCanvas(){ canvas.width=window.innerWidth; canvas.height=window.innerHeight; }
    window.addEventListener('resize', resizeCanvas); resizeCanvas();
    for(let i=0;i<50;i++){ particles.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,vx:(Math.random()-0.5)*1.5,vy:(Math.random()-0.5)*1.5}); }
    function animate(){ ctx.clearRect(0,0,canvas.width,canvas.height); ctx.fillStyle='#61dafb'; particles.forEach(p=>{p.x+=p.vx; p.y+=p.vy; if(p.x<0||p.x>canvas.width) p.vx*=-1; if(p.y<0||p.y>canvas.height) p.vy*=-1; ctx.beginPath(); ctx.arc(p.x,p.y,2,0,Math.PI*2); ctx.fill(); }); requestAnimationFrame(animate);}
    animate();
