<BrowserRouter> 
    <Navbar /> 
    <Routes> 
      <Route path='/' element={<Home/>}/> 
      <Route path='/search' element={<Search/>}/> 
      <Route path='/favorites' element={<Favorites/>}/> 
    </Routes> 
    <PlayerBar />
  </BrowserRouter> 