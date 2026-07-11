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
                className='relative group flex flex-col items-center justify-center h-[280px] rounded-2xl border border-dashed border-white/10 bg-white/[0.01] hover:bg-white/[0.03] hover:border-amber-500/40 transition-all duration-300 cursor-pointer shadow-lg shadow-black/20 overflow-hidden'
                onClick={() => setOpenDialog(true)}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 group-hover:scale-110 group-hover:border-amber-500/30 group-hover:bg-amber-500/10 transition-all duration-300 mb-4">
                    <Plus className="text-white/60 group-hover:text-amber-400 w-6 h-6 transition-colors" />
                </div>
                <p className="text-sm font-semibold tracking-wide text-white/50 group-hover:text-white transition-colors">Create Resume</p>
            </div>

            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                <DialogContent className="border border-white/10 bg-black/90 backdrop-blur-xl text-white rounded-2xl max-w-md p-6">
                    <DialogHeader className="space-y-3">
                        <DialogTitle className="text-2xl font-bold font-serif text-white flex items-center gap-2">
                            Create New Resume
                        </DialogTitle>
                        <DialogDescription className="text-sm text-white/50 leading-relaxed">
                            Give a professional title for your new resume to categorize your roles.
                        </DialogDescription>
                    </DialogHeader>
                    
                    <div className="my-4">
                        <Input 
                            className="bg-white/5 border-white/10 focus-visible:ring-amber-500/50 focus-visible:border-amber-500 text-white rounded-xl placeholder:text-white/20 h-11" 
                            placeholder="Ex. Senior Full Stack Engineer"
                            value={resumeTitle}
                            onChange={(e) => setResumeTitle(e.target.value)}
                        />
                    </div>

                    <div className='flex justify-end gap-3 mt-6'>
                        <Button 
                            onClick={() => setOpenDialog(false)} 
                            variant="ghost"
                            className="hover:bg-white/5 text-white/70 hover:text-white rounded-xl px-5"
                        >
                            Cancel
                        </Button>
                        <Button 
                            disabled={!resumeTitle.trim() || loading}
                            onClick={onCreate}
                            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-semibold rounded-xl px-6 transition-all duration-300 disabled:opacity-40"
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