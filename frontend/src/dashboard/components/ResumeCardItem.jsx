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
  const accent = resume?.themeColor || '#F59E0B' 

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
    <div className="group relative flex flex-col justify-between h-[280px] rounded-2xl border border-slate-200 bg-slate-50 hover:bg-slate-100 hover:bg-slate-50 hover:bg-slate-100 transition-all duration-300 hover:scale-[1.02] hover:border-slate-200 shadow-lg overflow-hidden">
      {}
      <div 
        className="absolute top-0 left-0 right-0 h-1.5 transition-all duration-300"
        style={{ backgroundColor: accent, opacity: 0.8 }}
      />

      <Link 
        to={'/dashboard/resume/' + resume.documentId + '/edit'}
        className="flex-1 flex flex-col items-center justify-center p-6"
      >
        <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-50 border border-slate-200 group-hover:border-blue-100 group-hover:scale-105 group-hover:bg-blue-100 transition-all duration-300">
          <FileText 
            className="h-8 w-8 transition-colors duration-300 text-slate-500 group-hover:text-blue-600" 
            strokeWidth={1.5} 
          />
        </div>
      </Link>

      <div
        className="flex items-center justify-between border-t border-slate-200 p-4"
        style={{ background: `linear-gradient(to bottom, ${accent}06, ${accent}0c)` }}
      >
        <div className="min-w-0 pr-2">
          <h2 className="truncate text-sm font-semibold tracking-wide text-slate-900 group-hover:text-blue-600 transition-colors">
            {resume.title}
          </h2>
          <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 flex items-center gap-1 mt-0.5">
            <Sparkles className="w-2.5 h-2.5 text-blue-600" /> AI Enhanced
          </span>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="p-1 hover:bg-slate-50 rounded-lg border border-transparent hover:border-slate-200 text-slate-500 hover:text-slate-900 transition-all">
              <MoreVertical className="h-4 w-4 cursor-pointer" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white border-slate-200 text-slate-900 rounded-xl">
            <DropdownMenuItem
              className="hover:bg-slate-50 cursor-pointer focus:bg-slate-50 focus:text-slate-900 text-xs font-medium rounded-lg"
              onClick={() => navigation('/dashboard/resume/' + resume.documentId + '/edit')}
            >
              Edit Details
            </DropdownMenuItem>
            <DropdownMenuItem
              className="hover:bg-slate-50 cursor-pointer focus:bg-slate-50 focus:text-slate-900 text-xs font-medium rounded-lg"
              onClick={() => navigation('/my-resume/' + resume.documentId + '/view')}
            >
              View Document
            </DropdownMenuItem>
            <DropdownMenuItem
              className="hover:bg-slate-50 cursor-pointer focus:bg-slate-50 focus:text-slate-900 text-xs font-medium rounded-lg"
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
          <AlertDialogContent className="bg-white border-slate-200 text-slate-900 rounded-2xl">
            <AlertDialogHeader>
              <AlertDialogTitle className="font-serif text-xl">Delete this resume?</AlertDialogTitle>
              <AlertDialogDescription className="text-sm text-slate-500">
                This action is permanent. The resume draft and all associated content will be permanently removed.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className="gap-3 mt-4">
              <AlertDialogCancel 
                onClick={() => setOpenAlert(false)}
                className="hover:bg-slate-50 text-slate-500 hover:text-slate-900 border-slate-200 rounded-xl"
              >
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction 
                onClick={onDelete} 
                disabled={loading}
                className="bg-red-600 hover:bg-red-500 text-slate-900 font-semibold rounded-xl"
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
