import { Container, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function HeaderSearchbar({drawer}) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleChange = e => {
    setQuery(e.target.value);
  }
  const handleKeyPress = e => {
    if ((e.key === 'Enter' || e.keyCode === 13) && query) {
      navigate(`/search/${query}`)
    }
  }

  return (
    <Container
      id="search-bar"
      className={drawer? "" : "center"}
      >
      <TextField id="sb-search-field" variant="filled" size="small" placeholder="search decks" fullWidth
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: 2,
          }
        }}
        onChange={handleChange}
        onKeyUp={handleKeyPress}
      />
      <Link className={query? "" : "disabled"} to={`/search/${query}`} id="hsb-search-button">
        <img src="../icons/search.svg"/>
      </Link>
    </Container>
  )
}
