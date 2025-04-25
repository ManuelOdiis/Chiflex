import {Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue} 
    from "@/components/ui/select";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import Button from "./Button";
    

const Form = () => {
  return (
    <form className="flex flex-col">
        <div className="flex flex-col gap-[20px] mb-[20px]">
            <Input type="fullname" placeholder="Full Name"/>
            <Input type="email" placeholder="Email Address"/>
            <div className="flex flex-col xl:flex-row gap-[20px]">
            <Input type="phone" placeholder="phone number"/>
            <Select>
                <SelectTrigger className="w-full rounded-none h-[54px] text-secondary outline-none">
                    <SelectValue placeholder="Select  Service"></SelectValue>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                    <SelectLabel>
                     Select Service
                     </SelectLabel>
                    <SelectItem value="cash on delivery">Cash on delivery
                    </SelectItem>
                    <SelectItem value="Replace order">Replace order
                    </SelectItem>
                    <SelectItem value="Home Delivery">Home Delivery
                    </SelectItem>
                    <SelectItem value="Special Order Request">Special Order Request
                    </SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            </div>
        </div>
        {/*textarea*/}
        <div className="flex flex-col gap-6">
            <Textarea className="h-[180px] resize-none rounded-none" placeholder="Enter your message"/>
            {/*btn*/}
            <Button text="send message">Send message</Button>
        </div>
    </form>
  );
};

export default Form;