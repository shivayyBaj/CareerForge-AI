import React, { useContext, useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { LayoutGrid } from 'lucide-react'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import GlobalApi from './../../../../service/GlobalApi'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner'

function ThemeColor() {
  const colors = [
    '#C9A962',
    '#1B3A4B',
    '#722F37',
    '#2C5530',
    '#4A3728',
    '#1A1A2E',
    '#0F3460',
    '#533483',
    '#2D4059',
    '#E94560',
    '#000000',
    '#4B5563',
  ]

  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext)
  const [selectedColor, setSelectedColor] = useState(resumeInfo?.themeColor)
  const { resumeId } = useParams()

  const onColorSelect = (color) => {
    setSelectedColor(color)
    setResumeInfo({
      ...resumeInfo,
      themeColor: color,
    })
    const data = {
      data: {
        themeColor: color,
      },
    }
    GlobalApi.UpdateResumeDetail(resumeId, data).then(() => {
      toast('Theme color updated')
    })
  }

  const onFontColorSelect = (fontColor) => {
    setResumeInfo({
      ...resumeInfo,
      themeFontColor: fontColor,
    })
    const data = {
      data: {
        themeFontColor: fontColor,
      },
    }
    GlobalApi.UpdateResumeDetail(resumeId, data).then(() => {
      toast('Font color updated')
    })
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="flex gap-2 border-gold/30">
          <LayoutGrid className="h-4 w-4" /> Theme
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto">
        <h2 className="mb-3 text-sm font-semibold">Accent Color</h2>
        <div className="grid grid-cols-5 gap-3 mb-4">
          {colors.map((item, index) => (
            <div
              key={index}
              onClick={() => onColorSelect(item)}
              className={`h-6 w-6 cursor-pointer rounded-full border-2 transition hover:scale-110 ${
                selectedColor === item ? 'border-primary ring-2 ring-primary/30' : 'border-transparent'
              }`}
              style={{ background: item }}
            />
          ))}
        </div>

        <div className="mt-4 pt-3 border-t flex items-center justify-between gap-4">
          <label htmlFor="black-font-toggle" className="text-xs font-semibold cursor-pointer select-none text-foreground/80">
            Use Black Font
          </label>
          <input
            id="black-font-toggle"
            type="checkbox"
            checked={resumeInfo?.themeFontColor === 'black'}
            onChange={(e) => onFontColorSelect(e.target.checked ? 'black' : 'default')}
            className="h-4 w-4 rounded border-border bg-background text-primary focus:ring-primary cursor-pointer accent-primary"
          />
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default ThemeColor
