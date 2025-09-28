import './header.css'

function HEader() {
  return (
    <div>
      <header>
        <div className="container">
<img src="./Logo.png" alt="" />
<input className='search' type="text" placeholder='Search for anything...'/> <i id='searchlogo' class="fa-solid fa-magnifying-glass"></i>
<div className="menu">

<i class="fa-solid fa-truck"></i>
<i class="fa-solid fa-heart"></i>

    <i class="fa-regular fa-user"></i>
</div>
        </div>
      </header>
    </div>
  )
}

export default HEader
