export interface Pet {
  readonly id: number;
  readonly category: Category;
  readonly name: string;
  readonly photoUrls: string[];
  readonly tags: Category[];
  readonly status: string;
}

export interface Category {
  readonly id: number;
  readonly name: string;
}
