import { Loader2, Plus } from 'lucide-react'
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { v4 as uuidv4 } from 'uuid';
import GlobalApi from './../../../service/GlobalApi'
import { useUser } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'

function AddResume() {
    const [openDialog, setOpenDialog] = useState(false)
    const [resumeTitle, setResumeTitle] = useState('');
    const { user } = useUser();
    const [loading, setLoading] = useState(false);
    const navigation = useNavigate();

    const onCreate = async () => {
        setLoading(true)
        const uuid = uuidv4();
        const data = {
            data: {
                title: resumeTitle,
                resumeId: uuid,
                userEmail: user?.primaryEmailAddress?.emailAddress,
                userName: user?.fullName
            }
        }

        GlobalApi.CreateNewResume(data).then(resp => {
            if (resp) {
                setLoading(false);
                navigation('/dashboard/resume/' + resp.data.data.documentId + "/edit");
            }
        }, (error) => {
            setLoading(false);
        })
    }

    return (
        <div>
            <div 
                className='relative group flex flex-col items-center justify-center h-[280px] rounded-2xl border border-dashed border-slate-200 bg-slate-50 hover:bg-slate-100 hover:bg-slate-50 hover:bg-slate-100 hover:border-blue-100 transition-all duration-300 cursor-pointer shadow-lg shadow-black/20 overflow-hidden'
                onClick={() => setOpenDialog(true)}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-blue-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-50 border border-slate-200 group-hover:scale-110 group-hover:border-blue-100 group-hover:bg-blue-100 transition-all duration-300 mb-4">
                    <Plus className="text-slate-500 group-hover:text-blue-600 w-6 h-6 transition-colors" />
                </div>
                <p className="text-sm font-semibold tracking-wide text-slate-500 group-hover:text-slate-900 transition-colors">Create Resume</p>
            </div>

            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                <DialogContent className="border border-slate-200 bg-white backdrop-blur-xl text-slate-900 rounded-2xl max-w-md p-6">
                    <DialogHeader className="space-y-3">
                        <DialogTitle className="text-2xl font-bold font-serif text-slate-900 flex items-center gap-2">
                            Create New Resume
                        </DialogTitle>
                        <DialogDescription className="text-sm text-slate-500 leading-relaxed">
                            Give a professional title for your new resume to categorize your roles.
                        </DialogDescription>
                    </DialogHeader>
                    
                    <div className="my-4">
                        <Input 
                            className="bg-slate-50 border-slate-200 focus-visible:ring-blue-100 focus-visible:border-blue-200 text-slate-900 rounded-xl placeholder:text-slate-500 h-11" 
                            placeholder="Ex. Senior Full Stack Engineer"
                            value={resumeTitle}
                            onChange={(e) => setResumeTitle(e.target.value)}
                        />
                    </div>

                    <div className='flex justify-end gap-3 mt-6'>
                        <Button 
                            onClick={() => setOpenDialog(false)} 
                            variant="ghost"
                            className="hover:bg-slate-50 text-slate-500 hover:text-slate-900 rounded-xl px-5"
                        >
                            Cancel
                        </Button>
                        <Button 
                            disabled={!resumeTitle.trim() || loading}
                            onClick={onCreate}
                            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold rounded-xl px-6 transition-all duration-300 disabled:opacity-40"
                        >
                            {loading ? (
                                <Loader2 className='animate-spin w-4 h-4' />
                            ) : (
                                'Create'
                            )}
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default AddResume