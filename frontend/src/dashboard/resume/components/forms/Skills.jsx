import { Input } from '@/components/ui/input'
import React, { useContext, useEffect, useState } from 'react'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Button } from '@/components/ui/button'
import { LoaderCircle } from 'lucide-react'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import GlobalApi from './../../../../../service/GlobalApi'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner'

function Skills() {
    const { resumeId } = useParams()

    const [loading, setLoading] = useState(false)
    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext)

    const [skillsList, setSkillsList] = useState([
        {
            name: '',
            rating: 0
        }
    ])

    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        if (resumeInfo && !isLoaded) {
            if (resumeInfo?.skills?.length > 0) {
                setSkillsList(resumeInfo.skills)
            }
            setIsLoaded(true)
        }
    }, [resumeInfo, isLoaded])

    const handleChange = (index, name, value) => {
        const newEntries = [...skillsList]
        newEntries[index][name] = value
        setSkillsList(newEntries)
        setResumeInfo(prev => ({
            ...prev,
            skills: newEntries
        }))
    }

    const AddNewSkills = () => {
        const newEntries = [
            ...skillsList,
            {
                name: '',
                rating: 0
            }
        ]
        setSkillsList(newEntries)
        setResumeInfo(prev => ({
            ...prev,
            skills: newEntries
        }))
    }

    const RemoveSkills = () => {
        if (skillsList.length > 1) {
            const newEntries = skillsList.slice(0, -1)
            setSkillsList(newEntries)
            setResumeInfo(prev => ({
                ...prev,
                skills: newEntries
            }))
        }
    }

    const onSave = () => {
        setLoading(true)

        const data = {
            data: {
                skills: skillsList
            }
        }

        GlobalApi.UpdateResumeDetail(resumeId, data)
            .then((resp) => {
                console.log(resp)
                setLoading(false)
                toast('Details updated!')
            })
            .catch((error) => {
                console.log(error)
                setLoading(false)
                toast('Error saving skills')
            })
    }

    return (
        <div className='premium-card mt-10 border-t-2 border-t-primary p-5'>
            <h2 className='font-bold text-lg'>Skills</h2>
            <p>Add Your top professional key skills</p>

            <div>
                {skillsList?.map((item, index) => (
                    <div
                        key={index}
                        className='flex justify-between mb-2 border rounded-lg p-3'
                    >
                        <div>
                            <label className='text-xs'>Name</label>
                            <Input
                                className='w-full'
                                value={item?.name || ''}
                                onChange={(e) =>
                                    handleChange(index, 'name', e.target.value)
                                }
                            />
                        </div>

                        <Rating
                            style={{ maxWidth: 120 }}
                            value={item?.rating || 0}
                            onChange={(v) =>
                                handleChange(index, 'rating', v)
                            }
                        />
                    </div>
                ))}
            </div>

            <div className='flex justify-between'>
                <div className='flex gap-2'>
                    <Button
                        variant='outline'
                        onClick={AddNewSkills}
                        className='text-primary'
                    >
                        + Add More Skill
                    </Button>

                    <Button
                        variant='outline'
                        onClick={RemoveSkills}
                        className='text-primary'
                    >
                        - Remove
                    </Button>
                </div>

                <Button disabled={loading} onClick={onSave}>
                    {loading ? (
                        <LoaderCircle className='animate-spin' />
                    ) : (
                        'Save'
                    )}
                </Button>
            </div>
        </div>
    )
}

export default Skills