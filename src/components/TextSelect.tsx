import { useState, SyntheticEvent, useCallback, useEffect } from 'react'
import { Menu, MenuItem, Box, Button, BoxProps } from '@mui/material'
import { KeyboardArrowDown } from '@mui/icons-material'

import { useSettings } from 'src/@core/hooks/useSettings'

export interface TextSelectOption<V = Numeric> {
  text: React.ReactNode
  value: V
}

export interface TextSelectProps<V = Numeric> {
  defaultValue?: V
  value?: V
  wrapperProps?: BoxProps
  options: TextSelectOption<V>[]
  onChange?: (e: SyntheticEvent, option: TextSelectOption<V>) => void
}

function TextSelect<V = Numeric>({
  defaultValue,
  value,
  wrapperProps,
  options,
  onChange,
}: TextSelectProps<V>) {
  const [anchorEl, setAnchorEl] = useState<any>(null)
  const [text, setText] = useState(
    options.find(option => option.value === (value || defaultValue))?.text
  )

  const {
    settings: { direction },
  } = useSettings()

  useEffect(() => {
    value && setText(options.find(option => option.value === value)?.text)
  }, [value, options])

  const handleDropdownOpen = (event: SyntheticEvent) => {
    setAnchorEl(event.currentTarget)
  }

  const handleDropdownClose = () => {
    setAnchorEl(null)
  }

  const handleItemClick = useCallback(
    (option: TextSelectOption<V>) => {
      return (e: SyntheticEvent) => {
        handleDropdownClose()
        setText(option.text)
        onChange?.(e, option)
      }
    },
    [onChange]
  )

  return (
    <Box component={'span'} {...wrapperProps}>
      <Button
        id="demo-positioned-button"
        aria-controls={anchorEl ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={anchorEl ? 'true' : undefined}
        onClick={handleDropdownOpen}
        endIcon={<KeyboardArrowDown color="primary" />}
        color="inherit"
      >
        {text}
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleDropdownClose}
        sx={{ '& .MuiMenu-paper': { mt: 4, minWidth: 130 } }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: direction === 'ltr' ? 'right' : 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: direction === 'ltr' ? 'right' : 'left',
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={index}
            selected={option.text === text}
            onClick={handleItemClick(option)}
          >
            {option.text}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )
}

export default TextSelect
