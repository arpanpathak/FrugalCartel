import React, { useState } from 'react'
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  IconButton,
  InputBase,
  List,
  ListItem,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'

interface GroceryItem {
  id: string
  name: string
  store: string
  price: number
}

const API_BASE_URL = 'http://localhost:5228/api/GrocorySearch/search'

export default function App() {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState<GroceryItem[]>([])
  const [loading, setLoading] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const handleSearch = async () => {
    if (!search.trim()) return
    setLoading(true)
    try {
      const url = `${API_BASE_URL}?query=${encodeURIComponent(search)}`
      const response = await fetch(url)
      const data: GroceryItem[] = await response.json()
      setResults(data || [])
    } catch (error) {
      console.error('Search error:', error)
      setResults([])
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', // full viewport height
      }}
    >
      <CssBaseline />

      <AppBar position="sticky">
        <Toolbar>
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setMenuOpen(!menuOpen)}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" component="div">
              FrugalKartel
            </Typography>
            <Typography variant="caption" sx={{ fontStyle: 'italic', opacity: 0.75 }}>
              Beat grocery inflation and customer rip-off
            </Typography>
          </Box>
          {!isMobile && (
            <>
              <Button color="inherit">Home</Button>
              <Button color="inherit">About</Button>
              <Button color="inherit">Features</Button>
              <Button color="inherit">Contact</Button>
            </>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile menu dropdown */}
      {isMobile && menuOpen && (
        <Box
          sx={{
            bgcolor: 'background.paper',
            boxShadow: 1,
          }}
        >
          <List>
            <ListItem button onClick={() => setMenuOpen(false)}>
              Home
            </ListItem>
            <ListItem button onClick={() => setMenuOpen(false)}>
              About
            </ListItem>
            <ListItem button onClick={() => setMenuOpen(false)}>
              Features
            </ListItem>
            <ListItem button onClick={() => setMenuOpen(false)}>
              Contact
            </ListItem>
          </List>
        </Box>
      )}

      <Box
        component="main"
        sx={{
          p: 3,
          flexGrow: 1,
          bgcolor: 'background.default',
          maxWidth: 600,
          mx: 'auto',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Grocery Price Search
        </Typography>

        <Box
          component="form"
          onSubmit={(e) => {
            e.preventDefault()
            handleSearch()
          }}
          sx={{ display: 'flex', gap: 1, mb: 3 }}
        >
          <InputBase
            placeholder="Search for groceries..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{
              flexGrow: 1,
              px: 2,
              py: 1,
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 1,
              backgroundColor: 'background.paper',
            }}
            inputProps={{ 'aria-label': 'search groceries' }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            startIcon={<SearchIcon />}
            disabled={loading}
          >
            Search
          </Button>
        </Box>

        {loading && <Typography>Loading...</Typography>}

        {!loading && results.length > 0 && (
          <List sx={{ width: '100%' }}>
            {results.map((item) => (
              <ListItem
                key={item.id}
                sx={{
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 1,
                  mb: 1,
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <Box>
                  <Typography variant="subtitle1" fontWeight="medium">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.store}
                  </Typography>
                </Box>
                <Typography variant="subtitle1" fontWeight="bold" color="primary">
                  ${item.price.toFixed(2)}
                </Typography>
              </ListItem>
            ))}
          </List>
        )}

        {!loading && results.length === 0 && search && (
          <Typography>No results found for &quot;{search}&quot;</Typography>
        )}
      </Box>

      <Box
        component="footer"
        sx={{
          p: 2,
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          textAlign: 'center',
          mt: 'auto',
        }}
      >
        <Typography variant="body2" fontWeight="bold">
          FrugalKartel — Beat grocery inflation and customer rip-off © 2025
        </Typography>
      </Box>
    </Box>
  )
}
