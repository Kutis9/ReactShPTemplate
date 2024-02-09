

export type Character = {
    id: string;
    name: string;
    house?: string;
    actor?: string;
    dateOfBirth?: string;
    gender: string;
    wand: {
      core?: string;
      wood?: string;
    };
    image?: string;
  };