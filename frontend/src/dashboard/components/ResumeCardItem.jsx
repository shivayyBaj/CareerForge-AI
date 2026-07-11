import { Loader2Icon, MoreVertical, FileText, Sparkles } from 'lucide-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import GlobalApi from './../../../service/GlobalApi'
import { toast } from 'sonner'

function ResumeCardItem({ resume, refreshData }) {
  const navigation = useNavigate()
  const [openAlert, setOpenAlert] = useState(false)
  const [loading, setLoading] = useState(false)
  const accent = resume?.themeColor || '#F59E0B' // Default amber/gold

  const onDelete = () => {
    setLoading(true)
    GlobalApi.DeleteResumeById(resume.documentId).then(
      () => {
        toast('Resume Deleted Successfully!')
        refreshData()
        setLoading(false)
        setOpenAlert(false)
      },
      () => {
        setLoading(false)
      }
    )
  }

  return (
    <div className="group relative flex flex-col justify-between h-[280px] rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-300 hover:scale-[1.02] hover:border-white/10 shadow-lg overflow-hidden">
      {/* Decorative colored glow band at top */}
      <div 
        className="absolute top-0 left-0 right-0 h-1.5 transition-all duration-300"
        style={{ backgroundColor: accent, opacity: 0.8 }}
      />

      <Link 
        to={'/dashboard/resume/' + resume.documentId + '/edit'}
        className="flex-1 flex flex-col items-center justify-center p-6"
      >
        <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/5 group-hover:border-amber-500/20 group-hover:scale-105 group-hover:bg-amber-500/5 transition-all duration-300">
          <FileText 
            className="h-8 w-8 transition-colors duration-300 text-white/40 group-hover:text-amber-400" 
            strokeWidth={1.5} 
          />
        </div>
      </Link>

      <div
        className="flex items-center justify-between border-t border-white/5 p-4"
        style={{ background: `linear-gradient(to bottom, ${accent}06, ${accent}0c)` }}
      >
        <div className="min-w-0 pr-2">
          <h2 className="truncate text-sm font-semibold tracking-wide text-white group-hover:text-amber-400 transition-colors">
            {resume.title}
          </h2>
          <span className="text-[10px] uppercase font-bold tracking-widest text-white/30 flex items-center gap-1 mt-0.5">
            <Sparkles className="w-2.5 h-2.5 text-amber-500" /> AI Enhanced
          </span>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="p-1 hover:bg-white/5 rounded-lg border border-transparent hover:border-white/10 text-white/40 hover:text-white transition-all">
              <MoreVertical className="h-4 w-4 cursor-pointer" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-black/90 border-white/10 text-white rounded-xl">
            <DropdownMenuItem
              className="hover:bg-white/10 cursor-pointer focus:bg-white/10 focus:text-white text-xs font-medium rounded-lg"
              onClick={() => navigation('/dashboard/resume/' + resume.documentId + '/edit')}
            >
              Edit Details
            </DropdownMenuItem>
            <DropdownMenuItem
              className="hover:bg-white/10 cursor-pointer focus:bg-white/10 focus:text-white text-xs font-medium rounded-lg"
              onClick={() => navigation('/my-resume/' + resume.documentId + '/view')}
            >
              View Document
            </DropdownMenuItem>
            <DropdownMenuItem
              className="hover:bg-white/10 cursor-pointer focus:bg-white/10 focus:text-white text-xs font-medium rounded-lg"
              onClick={() => navigation('/my-resume/' + resume.documentId + '/view')}
            >
              Download PDF
            </DropdownMenuItem>
            <DropdownMenuItem
              className="hover:bg-emerald-500/10 cursor-pointer focus:bg-emerald-500/10 text-emerald-400 focus:text-emerald-300 text-xs font-medium rounded-lg"
              onClick={() => navigation('/dashboard/cover-letter?resumeId=' + resume.documentId)}
            >
              Generate Cover Letter
            </DropdownMenuItem>
            <DropdownMenuItem 
              className="hover:bg-red-500/10 cursor-pointer focus:bg-red-500/10 text-red-400 focus:text-red-300 text-xs font-medium rounded-lg"
              onClick={() => setOpenAlert(true)}
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <AlertDialog open={openAlert}>
          <AlertDialogContent className="bg-black/95 border-white/10 text-white rounded-2xl">
            <AlertDialogHeader>
              <AlertDialogTitle className="font-serif text-xl">Delete this resume?</AlertDialogTitle>
              <AlertDialogDescription className="text-sm text-white/50">
                This action is permanent. The resume draft and all associated content will be permanently removed.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className="gap-3 mt-4">
              <AlertDialogCancel 
                onClick={() => setOpenAlert(false)}
                className="hover:bg-white/5 text-white/70 hover:text-white border-white/5 rounded-xl"
              >
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction 
                onClick={onDelete} 
                disabled={loading}
                className="bg-red-600 hover:bg-red-500 text-white font-semibold rounded-xl"
              >
                {loading ? <Loader2Icon className="animate-spin w-4 h-4" /> : 'Delete'}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  )
}

export default ResumeCardItem
